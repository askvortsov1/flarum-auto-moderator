import Model from "flarum/Model";

export default class Criterion extends Model {}

Object.assign(Criterion.prototype, {
  name: Model.attribute("name"),
  icon: Model.attribute("icon"),
  description: Model.attribute("description"),
  actions: Model.attribute("actions"),
  metrics: Model.attribute("metrics"),
  requirements: Model.attribute("requirements"),
  isValid: Model.attribute("isValid"),
  invalidActionSettings: Model.attribute("invalidActionSettings"),
  invalidRequirementSettings: Model.attribute("invalidRequirementSettings"),
});
