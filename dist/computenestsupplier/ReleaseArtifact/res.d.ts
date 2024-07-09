export interface ReleaseArtifactResponse {
    /**
     * 请求ID。
     * @example `86CAC31E-3527-562C-869F-347E931C9B25`
     */
    RequestId: string;
    /**
     * 部署物ID。
     * @example `artifact-9feded91880e4c78****`
     */
    ArtifactId: string;
    /**
     * 部署物类型。
     * @example `File`
     */
    ArtifactType: string;
    /**
     * 部署物版本名称。
     * @example `Oss关联升级测试`
     */
    VersionName: string;
    /**
     * 部署物版本。
     * @example `draft`
     */
    ArtifactVersion: string;
    /**
     * 部署物描述。
     * @example `Redhat8_0镜像`
     */
    Description: string;
    /**
     * 修改时间。
     * @example `1650954178000`
     */
    GmtModified: string;
    /**
     * 部署物的状态。
     * 取值：
     * - Created：已创建。
     * - Scanning：扫描中。
     * - ScanFailed：扫描失败。
     * - Delivering：分发中。
     * - Available：可使用。
     * - Deleted：已删除。
     * @example `Created`
     */
    Status: string;
    /**
     * 部署物内容。
     * @example `"{\"Url\":\"https://computenest-artifacts-draft-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/130920852836xxxx/cn-hangzhou/service-8072a04e5a134382xxxx/165095355xxxx/changes.txt\",\"ConfigurationMetadata\":\"{\\\"WorkDir\\\":\\\"/root\\\",\\\"Platform\\\":\\\"Linux\\\",\\\"CommandType\\\":\\\"RunShellScript\\\",\\\"UpgradeScript\\\":\\\"cd /root\\\\ncp changes.txt cpchanges.txt\\\\nmv changes.txt mvchangge.txt\\\"}\"}"`
     */
    ArtifactProperty: string;
}
