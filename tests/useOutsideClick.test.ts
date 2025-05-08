import { test, expect } from '@playwright/test';
import { useOutsideClick } from '@/components/quiz/hooks/useOutsideClick';
import { renderHook } from '@testing-library/react-hooks';
import { useRef } from 'react';


test('useOutsideClick should trigger callback when clicking outside the referenced elements', 
    async ({ page }) => {
        // Create a mockCallback function
        let callbackCalled = false;
        const mockCallback = () => {
            callbackCalled = true
        };

        // Render the hook in a test component
        const { result } = renderHook(() => {
            const ref1 = useRef<HTMLDivElement>(null);
            const ref2 = useRef<HTMLDivElement>(null);

            useOutsideClick([ref1, ref2], mockCallback);

            return { ref1, ref2 };
        });

        //Create a simple HTML structure for testing
        await page.setContent(`
            <div>
                <div id="element1" ref="${result.current.ref1}">Element 1</div>
                <div id="element2" ref="${result.current.ref2}">Element 2</div>
                <div id="outsideElement">Outside Element</div>
            </div>
        `);

        //Click inside the first element
        await page.click('#element2');
        expect(callbackCalled).toBe(false) // Callback should not be called

        // Click outside both elements
        await page.click('#outsideElement');
        expect(callbackCalled).toBe(true)
    }
)