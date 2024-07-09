export interface ListDeviceCertificateRequest {
    /**
     * 云消息队列 MQTT 版的实例ID，表示需要查看哪个实例下的所有设备证书。
     * @example `post-cn-7mz2d******`
     */
    "MqttInstanceId": string;
    /**
     * 查询第几页的返回结果。起始页从第1页开始计算。
     * @example `2`
     */
    "PageNo": string;
    /**
     * 每页最多显示几条查询记录。
     * 取值范围：1~100。
     * @example `10`
     */
    "PageSize": string;
}
