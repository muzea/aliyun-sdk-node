interface ChatRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "Utterance": string;
    "SessionId"?: string;
    "KnowledgeId"?: string;
    "SenderId"?: string;
    "SenderNick"?: string;
    "Tag"?: string;
    "Perspective"?: string[];
    "Recommend"?: boolean;
}
export { ChatRequest };