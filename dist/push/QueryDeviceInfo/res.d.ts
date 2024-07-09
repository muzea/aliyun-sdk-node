export interface QueryDeviceInfoResponse {
    /**
     * 请求ID。
     * @example `6EEF262B-EA7D-41DC-89B9-20F3D1E28194`
     */
    RequestId: string;
    /**
     * 设备详情。
     */
    DeviceInfo: {
        /**
         * 设备绑定的账户。
         * @example `test@aliyun.com`
         */
        Account: string;
        /**
         * 最近一次上线时间。
         * @example `2018-03-27T02:19:40Z`
         */
        LastOnlineTime: string;
        /**
         * 手机号。
         * @example `133********`
         */
        PhoneNumber: string;
        /**
         * 是否开启推送功能。
         * @example `true`
         */
        PushEnabled: boolean;
        /**
         * 设备类型。
         * @example `iOS`
         */
        DeviceType: string;
        /**
         * 设备ID。
         * @example `a64ae296f3b04a58a05b30c95****`
         */
        DeviceId: string;
        /**
         * 是否在线。
         * @example `false`
         */
        Online: boolean;
        /**
         * 设备绑定的标签。
         * @example `test_tag,test_tag2`
         */
        Tags: string;
        /**
         * 设备令牌。
         * @example `5ecc7b4012aaa801b63******5543ccbda6b4930d09629e936e1ac4b762a7df`
         */
        DeviceToken: string;
        /**
         * 设备绑定的别名。
         * @example `test_alias,test_alias2`
         */
        Alias: string;
        /**
         * 设备品牌
         * @example `HUAWEI`
         */
        Brand: string;
        /**
         * 设备型号
         * @example `VOG-AL00`
         */
        Model: string;
    };
}
