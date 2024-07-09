export interface DescribeFunctionResponse {
    /**
     * 唯一请求ID。
     * @example `75CE67BE-48E9-52AF-B965-4690270CD53A`
     */
    RequestId: string;
    /**
     * 云函数信息。
     */
    Function: {
        /**
         * 定时触发配置。
         * @example `公测版：cron:0 0 *​/2 * * *
        
        商业版：0 0 *​/2 * * *`
         */
        TimingTriggerConfig: string;
        /**
         * 定时触发任务自定义参数
         * >仅商业版支持该功能
         * @example `hello`
         */
        TimingTriggerUserPayload: string;
        /**
         * HTTP触发的路径，设置为空字符串表示取消该功能。必须以`/`开头，不能以`/`结尾，同一个Space下不允许重复，只支持（/）、（-）、（_）、（.）、字母和数字组合，最长不超过128个字符。
         * @example `/http/getWxToken`
         */
        HttpTriggerPath: string;
        /**
         * 云函数的创建时间。
         * @example `2021-12-02T02:40:37Z`
         */
        CreatedAt: string;
        /**
         * 云函数名称。
         * @example `demoFunction`
         */
        Name: string;
        /**
         * 云函数的修改时间。
         * @example `2019-06-21T02:22:53Z`
         */
        ModifiedAt: string;
        /**
         * 云函数描述。
         * @example `获取微信绑定手机号`
         */
        Desc: string;
        /**
         * 运行环境。
         */
        Spec: {
            /**
             * 函数超时时间，单位为秒，默认值为5，取值范围1-10。
             * @example `5`
             */
            Timeout: string;
            /**
             * 云函数执行环境，默认值为nodejs12，可选值为nodejs8,nodejs12。
             * @example `nodejs12`
             */
            Runtime: string;
            /**
             * 单实例允许的最大并发度，默认值为1，取值范围1-100。设置单实例多并发可以降低冷启动的频率，适用于函数中有较多时间在等待下游服务响应的场景，不适用于函数中有共享状态且不能并发访问的场景，也不适用于单个请求的执行要消耗大量CPU及内存资源的场景。
             * @example `1`
             */
            InstanceConcurrency: number;
            /**
             * 函数内存规格，取值为64的倍数，至少128MB，至多2048MB。
             * @example `512`
             */
            Memory: string;
        };
    };
    /**
     * 部署单详情。
     */
    Deployment: {
        /**
         * 创建时间。
         * @example `2019-06-11T10:51:19Z`
         */
        CreatedAt: string;
        /**
         * 部署单ID。
         * @example `dep-62020d3bea44fd4608118233`
         */
        DeploymentId: string;
        /**
         * 下载URL。
         * @example `http://bucket.oss-cn-shanghai.aliyuncs.com/xxxx-v2.zip?OSSAccessKeyId=LT*********1DkK6&Expires=1561425220&Signature=xEuiAgUMShQ4v8fYIl3FM8Jp3MA%3D`
         */
        DownloadSignedUrl: string;
        /**
         * 版本号。版本号是部署单上传的时间。
         * @example `2019061110511905080`
         */
        VersionNo: string;
        /**
         * 修改时间。
         * @example `2019-06-11T10:51:19Z`
         */
        ModifiedAt: string;
    };
}
