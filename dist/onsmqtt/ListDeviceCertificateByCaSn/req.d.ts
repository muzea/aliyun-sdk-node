export interface ListDeviceCertificateByCaSnRequest {
    /**
     * CA证书所绑定的实例ID，即云消息队列 MQTT 版的实例ID。
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
    /**
     * 待查询CA证书的SN序列码，表示查询哪一个CA证书下所有已注册的设备证书。
     * @example `007269004887******`
     */
    "CaSn": string;
}
