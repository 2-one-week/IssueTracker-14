const { issue: IssueModel } = require("../../db/models");

const toggleMilestoneToIssue = async (req, res) => {
  try {
    const { issueid, milestoneid } = req.params;
    await IssueModel.update(
      { milestoneid },
      {
        where: { id: issueid },
      }
    );
    return res.status(200).json({ message: "success" });
  } catch (error) {
    return res.status(400).json({ message: "fail", erroror: error.message });
  }
};

module.exports = {
  toggleMilestoneToIssue,
};
