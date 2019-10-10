interface CreateSurveyRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "ScenarioId": string;
    "Name": string;
    "Description"?: string;
    "FlowJson"?: string;
    "Corpora"?: string;
    "SpeechOptimizationParam"?: string;
    "GlobalQuestions"?: string;
    "Role"?: string;
    "Round"?: number;
}
export { CreateSurveyRequest };