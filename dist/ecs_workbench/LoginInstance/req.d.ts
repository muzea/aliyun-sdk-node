export interface LoginInstanceRequest {
    /**
     * 登录的实例信息
     */
    "InstanceLoginInfo"?: {
        /**
         * 登录的实例类型
         * @example `ecs/eci/ack`
         */
        InstanceType: string;
        /**
         * 实例所在的地域
         * @example `cn-hangzhou/cn-beijing`
         */
        RegionId: string;
        /**
         * 实例ID
         * @example `i-123`
         */
        InstanceId: string;
        /**
         * 实例的vpc的ID
         * @example `vpc-abc`
         */
        VpcId: string;
        /**
         * 实例的网络类型，vpc或者经典
         * @example `vpc/classic`
         */
        NetworkAccessMode: string;
        /**
         * 登录的IP
         * @example `127.0.0.1`
         */
        Host: string;
        /**
         * 登录的端口号
         * @example `22/3389`
         */
        Port: number;
        /**
         * 登录的协议
         * @example `ssh/rdp/ack`
         */
        Protocol: string;
        /**
         * 登录的用户名
         * @example `root/Administrator`
         */
        Username: string;
        /**
         * 认证类型
         * @example `password/certificate`
         */
        AuthenticationType: string;
        /**
         * 登录的密码
         * @example `xxxxx`
         */
        Password: string;
        /**
         * 当AuthenticationType是certificate的时候，登录的私钥
         * @example `----begin----
        ----end----`
         */
        Certificate: string;
        /**
         * 当AuthenticationType是certificate，并且certificate是加密的时候，加密所用的密码
         * @example `xxxx`
         */
        PassPhrase: string;
        /**
         * 额外的参数
         */
        Options: {
            /**
             * 协议是ack的时候，容器的信息
             */
            ContainerInfo: {
                /**
                 * 容器所在的集群ID
                 * @example `abcdef`
                 */
                ClusterId: string;
                /**
                 * 容器所在集群的名字
                 * @example `abc`
                 */
                ClusterName: string;
                /**
                 * 容器所在的命名空间
                 * @example `abc`
                 */
                Namespace: string;
                /**
                 * 创建容器的Deployment
                 * @example `abc`
                 */
                Deployment: string;
                /**
                 * 容器所在的PodName
                 * @example `abc`
                 */
                PodName: string;
                /**
                 * 容器的名字
                 * @example `abc`
                 */
                ContainerName: string;
                /**
                 * 额外需要的Header
                 * @example `{"abc":"def"}`
                 */
                Headers: any;
                /**
                 * 扩展参数
                 * @example `abc`
                 */
                Endpoint: string;
            };
            /**
             * 扩展参数，用于登录成功后通知的地址，目前不可填写
             * @example `abc`
             */
            NotificationRecipientUrl: string;
            /**
             * 扩展参数，用于登录成功后通知的事件类型，目前不可填写
             * @example `abc`
             */
            NotificationEventTypes: string;
            /**
             * 扩展参数，用于登录成功后通知的重试的次数，目前不可填写
             * @example `3`
             */
            NotificationRetryLimit: number;
            /**
             * 扩展参数，用于登录成功后通知失败的重试间隔时间，目前不可填写
             * @example `10`
             */
            NotificationRetryIntervalSeconds: number;
            /**
             * 扩展参数，用于登录成功后通知的控制地址，目前不可填写
             * @example `abc`
             */
            SessionControl: string;
            /**
             * rdp登录后禁用操作时间
             * @example `1200`
             */
            OperationDisableSeconds: number;
            /**
             * 音频禁音时间
             * @example `1200`
             */
            AudioMuteSeconds: number;
            /**
             * 视频禁用时间
             * @example `1200`
             */
            VideoFreezeSeconds: number;
            /**
             * rdp连接中固定的高度
             * @example `100`
             */
            FixedHeight: number;
            /**
             * rdp连接中固定的宽度
             * @example `100`
             */
            FixedWidth: number;
        };
        /**
         * 登录的失效时间
         * @example `2022-11-30 00:00:00`
         */
        ExpireTime: string;
        /**
         * 登录的持续时间
         * @example `123`
         */
        DurationSeconds: number;
        /**
         * 容器初始化执行命令
         * @example `/bin/sh`
         */
        DockerExec: string;
        /**
         * 容器名字
         * @example `nginx`
         */
        DockerContainerName: string;
        /**
         * 资源组ID
         * @example `rg-abcd`
         */
        ResourceGroupId: string;
        /**
         * 凭据登录Token
         * @example `abcd`
         */
        CredentialToken: string;
        /**
         * 是否通过凭据登录
         * @example `false`
         */
        LoginByInstanceCredential: boolean;
        /**
         * 是否通过快捷登录
         * @example `false`
         */
        LoginByInstanceShortcut: boolean;
        /**
         * 快捷登录Token
         * @example `abcd`
         */
        ShortcutToken: string;
    };
    /**
     * 实际登录的账户，扩展参数，目前不可使用
     */
    "UserAccount"?: {
        /**
         * 账户的主账号ID
         * @example `1234`
         */
        ParentId: number;
        /**
         * 账户的ID
         * @example `1234`
         */
        AccountId: number;
        /**
         * 账户的平台，目前是阿里云平台
         * @example `aas`
         */
        AccountPlatform: string;
        /**
         * 扩展参数，账户在企业的工号
         * @example `123abc`
         */
        EmpId: string;
        /**
         * 额外参数
         */
        Options: {
            /**
             * 账户的登录次数限制
             * @example `3`
             */
            LoginLimit: number;
        };
        /**
         * 账户的结构参数,主账号是2，子账号是3，sts账号是4
         * @example `2/3/4`
         */
        AccountStructure: string;
        /**
         * 登录的名字
         * @example `abc`
         */
        LoginName: string;
        /**
         * 账户的持续时间
         * @example `100`
         */
        DurationSeconds: number;
        /**
         * 账户的过期时间
         * @example `2022-11-30 00:00:00
        `
         */
        ExpireTime: string;
    };
    /**
     * 合作伙伴信息，扩展参数，暂时不可以填写
     */
    "PartnerInfo"?: {
        /**
         * 合作伙伴的ID，扩展参数
         * @example `abc`
         */
        PartnerId: string;
        /**
         * 合作伙伴的名字，扩展参数
         * @example `abc`
         */
        PartnerName: string;
    };
}
