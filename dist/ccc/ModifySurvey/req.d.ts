interface ModifySurveyRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "SurveyId": string;
    "ScenarioId": string;
    "Name"?: string;
    "Description"?: string;
    "FlowId"?: string;
    "FlowJson"?: string;
    "Corpora"?: string;
    "SpeechOptimizationParam"?: string;
    "GlobalQuestions"?: string;
    "Role"?: string;
    "Round"?: number;
}
export { ModifySurveyRequest };