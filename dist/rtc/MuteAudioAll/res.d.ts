// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.Participant
export interface Participant {
	Message: string;
	Code: string;
	Id: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.ParticipantsInMuteAudioAll
export interface ParticipantsInMuteAudioAll {
	Participant: Participant[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.MuteAudioAllResponse
export interface MuteAudioAllResponse {
	RequestId: string;
	ConferenceId: string;
	Participants: ParticipantsInMuteAudioAll;
}

