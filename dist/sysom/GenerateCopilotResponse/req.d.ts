export interface GenerateCopilotResponseRequest {
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 对接copilot llm服务的入参，参考标准LLM接口入参dict，需要转化成string并传入llmParamString中
         * @example `"{\"model\":\"Qwen-7B-Chat\",\"temperature\":0.9,\"max_tokens\":1000,\"top_p\":1,\"frequency_penalty\":0.0,\"presence_penalty\":0.6,\"messages\":[{\"role\":\"user\",\"content\":\"我是os工程师\"},{\"role\":\"assistant\",\"content\":\"您好。我是AI语言模型，很高兴为您服 务。有什么我能帮助您的呢\"},{\"role\":\"user\",\"content\":\"你知道什么是alinux吗\"}]}"`
         */
        llmParamString: string;
    };
}
