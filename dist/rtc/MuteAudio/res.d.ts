// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.Participant
export interface Participant {
	Message: string;
	Code: string;
	Id: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.ParticipantsInMuteAudio
export interface ParticipantsInMuteAudio {
	Participant: Participant[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.MuteAudioResponse
export interface MuteAudioResponse {
	RequestId: string;
	ConferenceId: string;
	Participants: ParticipantsInMuteAudio;
}

