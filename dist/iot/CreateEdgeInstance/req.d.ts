export interface CreateEdgeInstanceRequest {
    /**
     * 实例ID。公共实例不传此参数，企业版实例需传入。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 边缘实例名称。
     * 支持中文汉字、英文大小写、数字、下划线（_）和短划线（-），不超过20个字符（一个中文汉字算2个字符）。
     * @example `LinkIoTEdge_Node`
     */
    "Name": string;
    /**
     * 边缘实例标签。每个标签由`key:value`组成，多个标签间以英文逗号隔开。如`k1:v1,k2:v2`。
     * - 标签key限制如下：
     *     - 不可为空。
     *     - 在该边缘实例中唯一。
     *     - 仅支持英文大小写。
     *     - 不可超过20个字符。
     * - 标签value限制如下：
     *     - 不可为空。
     *     - 支持中文、英文大小写、数字、下划线（_）和短划线（-）。
     *     - 不可超过20个字符（一个中文汉字算2个字符）。
     * @example `k1:v1,k2:v2`
     */
    "Tags"?: string;
    /**
     * 产品规格。
     * - 10：轻量版。
     * - 20：标准版。
     * - 30：专业版。
     * 默认值为20（标准版）。
     * @example `20`
     */
    "Spec"?: number;
}
