export interface UpdateEdgeInstanceRequest {
    /**
     * 实例ID。公共实例不传此参数，企业版实例需传入。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 边缘实例ID。在[边缘计算控制台](https://iot.console.aliyun.com/le/instance/list)的**边缘实例**页面中，鼠标悬浮在目标边缘实例名称上获取ID。
     * 您也可以调用[QueryEdgeInstance](~~135214~~)接口获取。
     * @example `F3APY0tPLhmgGtx0****`
     */
    "InstanceId": string;
    /**
     * 边缘实例名称。
     * 支持中文汉字、英文大小写、数字、下划线（_）和短划线（-），不超过20个字符。
     * @example `LinkIoTEdge_Node`
     */
    "Name": string;
    /**
     * 边缘实例标签。每个标签由`key:value`组成，多个标签间以英文逗号隔开。例如`k1:v1,k2:v2`。
     * - 标签key限制如下：
     *     - 不可为空。
     *     - 在该边缘实例中唯一。
     *     - 仅支持英文大小写。
     *     - 不可超过20个字符。
     * - 标签value限制如下：
     *     - 不可为空。
     *     - 支持中文、英文大小写、数字、下划线（_）和短划线（-）。
     *     - 不可超过20个字符（一个中文汉字算2个字符）。
     * 为空时表示不更新该参数。
     * @example `k1:v1,k2:v2`
     */
    "Tags"?: string;
    /**
     * 产品规格。
     * - 10：轻量版。
     * - 20：标准版。
     * - 30：专业版。
     * 为空时表示不更新该参数。
     * @example `10`
     */
    "Spec"?: number;
    /**
     * 是否开启边缘实例。可选值：
     * - true：开启。
     * - false：关闭。
     * 为空时表示不更新该参数。
     * @example `true`
     */
    "BizEnable"?: boolean;
}
