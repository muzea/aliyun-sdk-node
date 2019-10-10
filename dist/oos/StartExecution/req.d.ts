interface StartExecutionRequest {
    "RegionId"?: string;
    "TemplateName": string;
    "TemplateVersion"?: string;
    "Mode"?: string;
    "LoopMode"?: string;
    "ParentExecutionId"?: string;
    "SafetyCheck"?: string;
    "Parameters"?: string;
    "ClientToken"?: string;
}
export { StartExecutionRequest };