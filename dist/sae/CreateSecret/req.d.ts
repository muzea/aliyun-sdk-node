export interface CreateSecretRequest {
    /**
     * Secret实例所在命名空间ID。默认同RegionId。
     * @example `cn-beijing:test`
     */
    "NamespaceId": string;
    /**
     * Secret实例名称。允许数字、字母和下划线（_）组合，仅允许以字母开头。
     * @example `registry-auth-acree`
     */
    "SecretName": string;
    /**
     * 当前支持的Secret实例类型。取值说明如下：
     * - **kubernetes.io/dockerconfigjson**：存储镜像仓库用户名和密码的保密字典，用于部署时拉取镜像鉴权。
     * @example `kubernetes.io/dockerconfigjson`
     */
    "SecretType": string;
    "SecretData": {
        SecretData: string;
    };
}
