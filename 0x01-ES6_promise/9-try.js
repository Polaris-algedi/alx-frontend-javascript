/**
 * Creates and returns an array named queue.
 * Executes the mathFunction and appends the result or error message to the queue.
 * Appends the message 'Guardrail was processed' to the queue in every case.
 */
export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
