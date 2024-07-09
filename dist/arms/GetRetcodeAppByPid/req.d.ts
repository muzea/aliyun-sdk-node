export interface GetRetcodeAppByPidRequest {
    /**
     * 应用PID。在ARMS控制台的**前端监控**>**前端列表**页面单击目标应用名称。此时浏览器地址栏中的URL即包含应用的pid，格式为pid=xxx。由于浏览器进行了编码，因此需要对pid稍作修改。例如，如果URL中包含的pid为xxx%4074xxx，则需要将%40替换为@，即：xxx@74xxx。
     * @example `b590lhguqs@9781be0f44dXXXX`
     */
    "Pid": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 标签键值对，当您未输入ResourceIds参数时必填。取值说明如下：                              key：标签键，字符长度范围[1,128]。                                 value：标签值，字符长度范围[1,128]。                                 区分大小写。如果指定多个标签，则会为指定资源同时创建并绑定多个标签。同一个资源上的同一个标签键只能对应一个标签值。如果您尝试添加已有标签键，则对应的标签值会更新为新值。不能以aliyun和acs:开头，不能包含http://或者https://。
     */
    "Tags"?: {
        /**
         * 标签键。必填参数，不允许为空字符串。最多支持128个字符，不能以```aliyun```和```acs:```开头，不能包含```http://```或 ```https://```。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值。非必填，可以为空字符串。最多支持128个字符，不能以```acs:```开头，不能包含```http://```或者```https://```。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
