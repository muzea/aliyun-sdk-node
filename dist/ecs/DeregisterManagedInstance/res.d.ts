export interface DeregisterManagedInstanceResponse {
    /**
     * 请求ID。
     * @example `4ECEEE12-56F1-4FBC-9AB1-890F74942176`
     */
    RequestId: string;
    /**
     * 托管实例的信息组成的集合。
     */
    Instance: {
        /**
         * 最后一次执行云助手任务的时间。
         * @example `2021-01-20T09:00:40Z`
         */
        LastInvokedTime: string;
        /**
         * 托管实例的公网IP。
         * @example `47.8.**.**`
         */
        InternetIp: string;
        /**
         * 托管实例主机名。
         * @example `test-Hostname`
         */
        Hostname: string;
        /**
         * 托管实例ID。
         * @example `mi-hz01axdfas****`
         */
        InstanceId: string;
        /**
         * 激活码ID。
         * @example `4ECEEE12-56F1-4FBC-9AB1-890F7494****`
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
         * @example `test-InstanceName-001`
         */
        InstanceName: string;
        /**
         * 托管实例的操作系统。
         * @example `linux`
         */
        OsType: string;
        /**
         * 操作系统的版本信息。
         * @example `Linux_#38~18.04.1-Ubuntu SMP Wed Jan 6 18:26:30 UTC 2021_x86_64`
         */
        OsVersion: string;
        /**
         * 托管实例执行云助手任务的次数。
         * @example `2`
         */
        InvocationCount: number;
        /**
         * 托管实例的机器码。
         * @example `e03231b37ab14e53b5795ad625fc****`
         */
        MachineId: string;
        /**
         * 托管实例所属的资源组ID。
         * @example `rg-123******`
         */
        ResourceGroupId: string;
    };
}
