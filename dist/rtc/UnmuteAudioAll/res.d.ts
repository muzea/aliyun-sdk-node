// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.Participant
export interface Participant {
	Message: string;
	Code: string;
	Id: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.ParticipantsInUnmuteAudioAll
export interface ParticipantsInUnmuteAudioAll {
	Participant: Participant[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.UnmuteAudioAllResponse
export interface UnmuteAudioAllResponse {
	RequestId: string;
	ConferenceId: string;
	Participants: ParticipantsInUnmuteAudioAll;
}

