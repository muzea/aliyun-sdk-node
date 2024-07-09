export interface DescribeExposedInstanceDetailResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `C590482B-54A7-4273-8115-9DBE2DE46B26`
     */
    RequestId: string;
    /**
     * 资产暴露详情链路信息列表。
     */
    ExposedChains: {
        /**
         * 暴露IP。
         * @example `47.99.XX.XX`
         */
        ExposureIp: string;
        /**
         * 服务器分组。
         * @example `sg-bp1iw5enua6gf5i2xr7z`
         */
        GroupNo: string;
        /**
         * 服务器的公网IP。
         * @example `47.99.XX.XX`
         */
        InternetIp: string;
        /**
         * 服务器实例ID。
         * @example `i-bp116qem8npvchqc****`
         */
        InstanceId: string;
        /**
         * 暴露方式。取值：
         * - **INTERNET_IP**：ECS公网IP
         * - **SLB**：负载均衡SLB公网IP
         * - **EIP**：弹性公网IP
         * - **DNAT**：使用DNAT功能连接互联网的NAT网关
         * @example `INTERNET_IP`
         */
        ExposureType: string;
        /**
         * 服务器的私网IP。
         * @example `192.168.XX.XX`
         */
        IntranetIp: string;
        /**
         * 暴露方式对应的实例ID。不同暴露方式对应不同的实例ID，取值：
         * - ExposureType为**INTERNET_IP**时：取值为空。
         * - ExposureType为**SLB**时：取值为负载均衡公网实例ID。
         * - ExposureType为**EIP**时：取值为弹性公网IP的实例ID。
         * - ExposureType为**DNAT**时：取值为NAT网关实例ID。
         * @example `eip-bp1bkgowzam49rld3****`
         */
        ExposureTypeId: string;
        /**
         * 服务器所在地域。
         * > Region ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 服务器UUID。
         * @example `4f9ce097-4a7d-48fe-baef-6960e5b6****`
         */
        Uuid: string;
        /**
         * 暴露端口。
         * @example `22`
         */
        ExposurePort: string;
        /**
         * 服务器实例名称。
         * @example `worker-k8s-for-cs-c929ee2a145214f89a8b248005be5****`
         */
        InstanceName: string;
        /**
         * 暴露在互联网的系统组件名称。
         * @example `openssl,openssh`
         */
        ExposureComponent: string;
        /**
         * 暴露在互联网上可被黑客利用的漏洞信息列表。
         */
        RealVulList: {
            /**
             * 漏洞类型。取值：
             * - **cve**：Linux漏洞
             * - **sys**：Windows漏洞
             * - **cms**：Web-CMS漏洞
             * - **app**：应用漏洞
             * - **emg**：应急漏洞
             * - **sca**：中间件漏洞
             * @example `sca`
             */
            Type: string;
            /**
             * 漏洞修复必要性等级。取值包括：
             * - **asap**：高
             * - **later**：中
             * - **nntf**：低
             * > 建议您尽快修复必要性等级为**高**的漏洞。
             * @example `asap`
             */
            Necessity: string;
            /**
             * 服务器UUID。
             * @example `4f9ce097-4a7d-48fe-baef-6960e5b6****`
             */
            Uuid: string;
            /**
             * 漏洞别名。
             * @example `RHSA-2022:0274-Important: polkit pkexec Local Privilege Escalation Vulnerability(CVE-2021-4034)`
             */
            AliasName: string;
            /**
             * 漏洞名称。
             * @example `SCA:ACSV-2020-052801`
             */
            Name: string;
        }[];
        /**
         * 该服务器上的所有漏洞列表信息。
         */
        AllVulList: {
            /**
             * 漏洞类型。取值：
             * - **cve**：Linux漏洞
             * - **sys**：Windows漏洞
             * - **cms**：Web-CMS漏洞
             * - **app**：应用漏洞
             * - **emg**：应急漏洞
             * - **sca**：中间件漏洞
             * @example `sca`
             */
            Type: string;
            /**
             * 漏洞修复必要性等级。取值包括：
             * - **asap**：高
             * - **later**：中
             * - **nntf**：低
             * > 建议您尽快修复必要性等级为**高**的漏洞。
             * @example `asap`
             */
            Necessity: string;
            /**
             * 服务器UUID。
             * @example `4f9ce097-4a7d-48fe-baef-6960e5b6****`
             */
            Uuid: string;
            /**
             * 漏洞别名。
             * @example `RHSA-2022:0274-Important: polkit pkexec Local Privilege Escalation Vulnerability(CVE-2021-4034)`
             */
            AliasName: string;
            /**
             * 漏洞名称。
             * @example `SCA:ACSV-2020-052801`
             */
            Name: string;
        }[];
    }[];
}
