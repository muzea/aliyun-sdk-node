export interface DescribeManagedInstancesResponse {
    /**
     * 输入时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `77115469-F2C5-4ECA-94F7-FA04F2FD****`
     */
    RequestId: string;
    /**
     * 托管实例列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 查询到的托管实例总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 托管实例列表。
     */
    Instances: {
        /**
         * 最后一次执行云助手任务的时间。
         * @example `2021-01-20T09:00:40Z`
         */
        LastInvokedTime: string;
        /**
         * 托管实例是否已连接。
         * - true：托管实例已连接，您可以通过云助手管理托管实例。
         * - false：托管实例未连接，服务器可能停机或者云助手Agent未正确安装。
         * @example `true`
         */
        Connected: boolean;
        /**
         * 托管实例的公网IP。
         * @example `40.65.**.**`
         */
        InternetIp: string;
        /**
         * 托管实例主机名。
         * @example `demo`
         */
        Hostname: string;
        /**
         * 托管实例ID。
         * @example `mi-hz018jrc1o0****`
         */
        InstanceId: string;
        /**
         * 激活码ID。
         * @example `3704F543-F768-43FA-9864-897F75B3****`
         */
        ActivationId: string;
        /**
         * 托管实例的内网IP。
         * @example `10.0.**.**`
         */
        IntranetIp: string;
        /**
         * 云助手Agent的版本号。
         * @example `2.2.0.102`
         */
        AgentVersion: string;
        /**
         * 托管实例的注册时间。
         * @example `2021-01-20T08:57:56Z`
         */
        RegistrationTime: string;
        /**
         * 托管实例名称。
         * @example `webAPP-linux-01`
         */
        InstanceName: string;
        /**
         * 托管实例的操作系统。
         * @example `Linux`
         */
        OsType: string;
        /**
         * 操作系统的版本信息。
         * @example `Linux_#38~18.04.1-Ubuntu SMP Wed Jan 6 18:26:30 UTC 2021_x86_64`
         */
        OsVersion: string;
        /**
         * 托管实例执行云助手任务的次数。
         * @example `1`
         */
        InvocationCount: number;
        /**
         * 托管实例的机器码。
         * @example `e03231b37ab14e53b5795ad625fc****`
         */
        MachineId: string;
        /**
         * 标签列表。
         */
        Tags: {
            /**
             * 托管实例的标签键。N的取值范围为1~20。一旦传入该值，则不允许为空字符串。
             * 使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个。使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，您需要使用[ListTagResources](~~110425~~)接口进行查询。
             * 最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
             * @example `TestKey`
             */
            TagKey: string;
            /**
             * 托管实例的标签值。N的取值范围为1~20。该值可以为空字符串。
             * 最多支持128个字符，不能包含`http://`或`https://`。
             * @example `TestValue`
             */
            TagValue: string;
        }[];
        /**
         * 托管实例所属的资源组ID。
         * @example `rg-123******`
         */
        ResourceGroupId: string;
    }[];
    /**
     * 本次调用返回的查询凭证值。
     * @example `AAAAAdDWBF2`
     */
    NextToken: string;
}
