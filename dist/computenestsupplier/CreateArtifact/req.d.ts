export interface CreateArtifactRequest {
    /**
     * 部署物ID。
     * 当您要为已有部署物创建新版本时，该参数必填。
     * 您可以通过调用[ListArtifacts - 查询部署物列表](~~469993~~)获取部署物ID。
     * @example `artifact-eea08d1e2d3a43ae****`
     */
    "ArtifactId"?: string;
    /**
     * 部署物类型。
     * 取值：
     * - EcsImage：ECS镜像部署物。
     * - AcrImage：容器镜像部署物。
     * - File：Oss文件部署物。
     * - Script：脚本部署物。
     * - HelmChart：HelmChart部署物。
     * @example `EcsImage`
     */
    "ArtifactType": string;
    /**
     * 部署物名称。
     * @example `Redhat8_5镜像`
     */
    "Name": string;
    /**
     * 部署物版本名称。
     * @example `v1`
     */
    "VersionName": string;
    /**
     * 部署物描述。
     * @example `Redhat8_0镜像`
     */
    "Description"?: string;
    /**
     * 部署物内容。
     */
    "ArtifactProperty"?: {
        /**
         * 文件部署物的URL。
         * 您可以通过[对象存储控制台](https://oss.console.aliyun.com/bucket)上传并获取文件URL.
         * @example `https://service-info-private.oss-cn-hangzhou.aliyuncs.com/130920852876****​/template/2e1ce8fc-****-481c-9e8e-789ba9db487d.json`
         */
        Url: string;
        /**
         * 文件脚本元数据。
         * @example `{\"WorkDir\":\"/root\",\"CommandType\":\"RunShellScript\",\"Platform\":\"Linux\",\"Script\":\"echo hello\"}`
         */
        FileScriptMetadata: string;
        /**
         * 镜像地域。
         * >该参数仅部署物为镜像部署物时可设置。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 镜像ID。
         * 当您选定RegionId时，您可以调用[DescribeImages - 查询可以使用的镜像资源](~~2679797~~)查看指定地域下可用的镜像ID。
         * > 该参数仅部署物为镜像部署物时可设置。
         * @example `m-uf645fnsef9dsxmw****`
         */
        ImageId: string;
        /**
         * 云市场商品code。
         * 您可以通过调用[DescribeProducts](~~153323~~)获取商品Code。
         * 您还可以通过[云市场控制台](https://market.console.aliyun.com/?spm=a2c4g.11186623.0.0.599d6787eMBBxu#/apiTools?_k=d7j8gk)获取商品Code。
         * > 该参数仅部署物为镜像部署物时可设置。
         * @example `cmjj00****`
         */
        CommodityCode: string;
        /**
         * 云市场商品版本。
         * 您可以通过[云市场页面](https://market.aliyun.com/?spm=5176.24779694.0.0.b2144d22sksKM5)查看云市场商品版本。
         * > 该参数仅部署物为镜像部署物时可设置。
         * @example `V1.0`
         */
        CommodityVersion: string;
        /**
         * 脚本部署物的脚本内容。
         * > 该参数仅部署物为脚本部署物时可设置。
         * @example `{"ScriptMetadata":"{\"CommandType\":\"RunShellScript\",\"Platform\":\"Linux\",\"Script\":\"ls\"}"}`
         */
        ScriptMetadata: string;
        /**
         * 指定镜像仓库名称。
         * > 该参数仅部署物为容器镜像部署物和HelmChart部署物时可设置。
         * @example `wordpress`
         */
        RepoName: string;
        /**
         * 镜像仓库ID。
         * 您可以通过调用[ListAcrImageRepositories - 查看已上传至ACR的镜像列表](~~2539919~~)获取镜像仓库ID。
         * > 该参数仅部署物为容器镜像部署物和HelmChart部署物时可设置。
         * @example `crr-d8o1nponyc2t****`
         */
        RepoId: string;
        /**
         * 镜像仓库对应的版本。
         * 您可以通过调用[ListAcrImageTags - 查看镜像仓库中已上传的镜像版本](~~2539920~~)获取镜像仓库对应的版本。
         * > 该参数仅部署物为容器镜像部署物和HelmChart部署物时可设置。
         * @example `v1`
         */
        Tag: string;
    };
    /**
     * 支持镜像分发的地域。
     */
    "SupportRegionIds"?: string[];
    /**
     * 资源组ID。
     * @example `rg-acfm2jfvb7b****`
     */
    "ResourceGroupId"?: string;
    /**
     * 用户自定义标签。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `key1`
         */
        Key: string;
        /**
         * 标签值。
         * @example `value1`
         */
        Value: string;
    }[];
}
