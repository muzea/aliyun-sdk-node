// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.Participant
export interface Participant {
	Message: string;
	Code: string;
	Id: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.ParticipantsInRemoveParticipants
export interface ParticipantsInRemoveParticipants {
	Participant: Participant[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.RemoveParticipantsResponse
export interface RemoveParticipantsResponse {
	RequestId: string;
	ConferenceId: string;
	Participants: ParticipantsInRemoveParticipants;
}

