export interface CommitContainerRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要创建CommitContainer任务的ECI实例。
     * @example `eci-bp1do4xz75fa5sd****`
     */
    "ContainerGroupId": string;
    /**
     * 要制作镜像的容器的名称。
     * @example `container-1`
     */
    "ContainerName": string;
    /**
     * 容器镜像信息。
     */
    "Image"?: {
        /**
         * ACR镜像仓库地址。
         * 出于安全考虑，目前仅支持将镜像推送（Push）至ACR。
         * @example `registry-vpc.cn-beijing.aliyuncs.com/test/test-****`
         */
        Repository: string;
        /**
         * 镜像标签。默认为空，代表不修改标签。
         * @example `0.0.6`
         */
        Tag: string;
        /**
         * 镜像的说明信息。
         * @example `test commit`
         */
        Message: string;
        /**
         * 镜像的authorization。
         * @example `alice`
         */
        Author: string;
    };
    /**
     * ACR企业版实例的访问凭证配置信息。
     * > 使用ACR个人版实例时无需配置该参数；使用ACR企业版实例时必须配置该参数。
     */
    "AcrRegistryInfo"?: {
        /**
         * ACR企业版实例ID。
         * @example `cri-nwj395hgf6f3****`
         */
        InstanceId: string;
        /**
         * ACR企业版实例所属的地域。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 跨账号授权场景下，使用者（被授权者）的RAM角色ARN。
         * @example `acs:ram::1609982529******:role/role-test`
         */
        ArnService: string;
        /**
         * 跨账号授权场景下，授权者的RAM角色ARN。
         * @example `acs:ram::1298452580******:role/role-test`
         */
        ArnUser: string;
    };
    /**
     * 授权需要的ARN信息。
     */
    "Arn"?: {
        /**
         * 授权角色的ARN。
         * @example `acs:ram:xxx`
         */
        RoleArn: string;
        /**
         * 授权类型。可配置为service，表示使用RAM角色进行授权。
         * @example `service`
         */
        RoleType: string;
    };
}
