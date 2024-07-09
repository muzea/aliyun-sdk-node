export interface DesignateWorkersRequest {
    /**
     * 命名空间UID
     * @example `4a06d5ea-f576-4326-842c-fb14ea043d8d`
     */
    "Namespace": string;
    /**
     * 命名空间来源
     * @example `schedulerx`
     */
    "NamespaceSource"?: string;
    /**
     * 应用分组ID
     * @example `hxm.test`
     */
    "GroupId": string;
    /**
     * 任务ID
     * @example `144153`
     */
    "JobId": number;
    /**
     * 是否故障转移
     * @example `true`
     */
    "Transferable": boolean;
    /**
     * 指定机器的类型：1.worker, 2.label
     * @example `1`
     */
    "DesignateType": number;
    /**
     * 指定机器列表JSON格式列表
     * @example `["127.0.0.1","127.0.0.2"]`
     */
    "Workers"?: string;
    /**
     * 指定`label`列表`json`格式列表
     * @example `["gray"]`
     */
    "Labels"?: string;
    /**
     * 地域
     * @example `public`
     */
    "RegionId": string;
}
