export interface VoiceModerationResultRequest {
    /**
     * 审核服务类型，包括：
     * nickname_detection：用户昵称
     * 待定
     * @example `nickname_detection`
     */
    "Service": string;
    /**
     * 网关向后端服务发送API请求的参数描述。
     * 更多信息，请参见[ServiceParameter](~~43988~~)。
     * @example `暂无`
     */
    "ServiceParameters"?: string;
}
