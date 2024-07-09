export interface QueryServiceConfigResponse {
    /**
     * 错误描述
     * @example `xxxx`
     */
    Message: string;
    /**
     * 请求ID，用于跟踪错误原因
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 服务摘要信息
     * @example `{"binds": {"hk9xtvX6usP2": {"ref": {"fieldCode": "historyCntOf7","label": "7天内服务次数","type": "object","boCode": "serviceContextObj"},"jPath": "children","source": "data"},"hYUi5kwGf0Pm": {"ref": {"fieldCode": "groupName","label": "进线技能组","type": "object","boCode": "serviceContextObj"},"jPath": "children","source": "data"}`
     */
    Data: string;
    /**
     * 错误编码
     * @example `Success`
     */
    Code: string;
    /**
     * 接口调用是否成功
     * @example `true`
     */
    Success: boolean;
}
