interface DialogueRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "CallId": string;
    "CallType": string;
    "CallingNumber": string;
    "CalledNumber": string;
    "ScenarioId"?: string;
    "TaskId"?: string;
    "Utterance"?: string;
    "ActionKey"?: string;
    "ActionParams"?: string;
    "InstanceOwnerId"?: number;
}
export { DialogueRequest };