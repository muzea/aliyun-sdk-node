export interface PushMsConfigDataRequest {
    /**
     * 属性自增长 ID
     * @example `1`
     */
    "AttributeId": number;
    /**
     * 需要发布的单元列表，英文逗号隔开，为空表示推送到所有单元
     * @example `Cell1,Cell2`
     */
    "Cells"?: string;
    /**
     * 推送的属性值
     * @example `12`
     */
    "Data"?: string;
    /**
     * 系统字段：环境实例 ID
     * @example `abcdEFGH1234`
     */
    "InstanceId": string;
    /**
     * 操作人
     * @example `wang.li`
     */
    "Operator"?: string;
}
