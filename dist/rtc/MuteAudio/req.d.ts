interface MuteAudioRequest {
    "RegionId"?: string;
    "AppId": string;
    "ConferenceId": string;
    "ParticipantIds": string[];
    "OwnerId"?: number;
}
export { MuteAudioRequest };