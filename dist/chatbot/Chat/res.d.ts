// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/chatbot.Text
export interface Text {
	Content: string;
	AnswerSource: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/chatbot.Knowledge
export interface Knowledge {
	Id: string;
	Title: string;
	Summary: string;
	Content: string;
	AnswerSource: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/chatbot.Recommend
export interface Recommend {
	KnowledgeId: string;
	Title: string;
	AnswerSource: string;
	Summary: string;
	Content: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/chatbot.Message
export interface Message {
	Type: string;
	Text: Text;
	Knowledge: Knowledge;
	Recommends: Recommend[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/chatbot.ChatResponse
export interface ChatResponse {
	RequestId: string;
	SessionId: string;
	MessageId: string;
	Tag: string;
	Messages: Message[];
}

