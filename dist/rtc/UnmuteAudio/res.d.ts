// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.Participant
export interface Participant {
	Message: string;
	Code: string;
	Id: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.ParticipantsInUnmuteAudio
export interface ParticipantsInUnmuteAudio {
	Participant: Participant[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.UnmuteAudioResponse
export interface UnmuteAudioResponse {
	RequestId: string;
	ConferenceId: string;
	Participants: ParticipantsInUnmuteAudio;
}

