// Example controller
class ExampleController {
  async getAll(req, res) {
    try {
      res.json({ message: 'Example endpoint' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
