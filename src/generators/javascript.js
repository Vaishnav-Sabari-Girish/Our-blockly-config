/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {Order} from 'blockly/javascript';

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);

// Existing block generator for 'add_text'
forBlock['add_text'] = function (block, generator) {
  const text = generator.valueToCode(block, 'TEXT', Order.NONE) || "''";
  const addText = generator.provideFunction_(
    'addText',
    `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(text) {

  // Add text to the output area.
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = text;
  outputDiv.appendChild(textEl);
}`,
  );
  // Generate the function call for this block.
  const code = `${addText}(${text});\n`;
  return code;
};



// New block generator for 'esp32_pin_write'
forBlock['esp32_pin_write'] = function (block, generator) {
  const pin = generator.valueToCode(block, 'PIN', Order.ATOMIC);
  const value = generator.valueToCode(block, 'VALUE', Order.ATOMIC);
  // Generate the ESP32 digitalWrite code
  const code = `digitalWrite(${pin}, ${value});\n`;
  return code;
};

// New block generator for 'esp32_pin_write'
forBlock['esp32_pin_write'] = function (block, generator) {
  const pin = generator.valueToCode(block, 'PIN', Order.ATOMIC);
  const value = generator.valueToCode(block, 'VALUE', Order.ATOMIC);
  // Generate the ESP32 digitalWrite code
  const code = `digitalWrite(${pin}, ${value});\n`;
  return code;
};

