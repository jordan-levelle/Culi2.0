import validator from 'validator';

const updateInstructionsValidation = (req, res, next) => {
  const { instructions } = req.body;

  if (
    !instructions ||
    !Array.isArray(instructions) ||
    instructions.length === 0
  ) {
    return res.status(400).json({ message: 'Invalid instructions!' });
  }

  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i];

    if (
      !instruction.step ||
      typeof instruction.step !== 'number' ||
      instruction.step < 1
    ) {
      return res.status(400).json({ message: 'Invalid instruction step!' });
    }

    if (
      !instruction.description ||
      typeof instruction.description !== 'string' ||
      instruction.description.length > 1000
    ) {
      return res.status(400).json({
        message: `Invalid instruction description!: ${instruction.description}`,
      });
    } else {
      instruction.description = validator.escape(instruction.description);
    }
  }

  next();
};

export default updateInstructionsValidation;
