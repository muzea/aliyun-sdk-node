export interface UpdateArtifactRequest {
    /**
     * 部署物ID。
     * @example `artifact-eea08d1e2d3a43aexxxx`
     */
    "ArtifactId": string;
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
     * 部署物属性。
     */
    "ArtifactProperty": {
        /**
         * 文件部署物URL。
         * @example `https://service-info-private.oss-cn-hangzhou.aliyuncs.com/1309208528xxxxxx/template/2e1ce8fc-xxxx-481c-9e8e-789ba9db487d.json`
         */
        Url: string;
        /**
         * 镜像地域。
         * > 该参数仅部署物为镜像部署物时可设置。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 镜像ID。
         * > 该参数仅部署物为镜像部署物时可设置。
         * @example `m-0xij191j9cuev6ucxxxx`
         */
        ImageId: string;
        /**
         * 云市场商品code。
         * > 该参数仅部署物为镜像部署物时可设置。
         * @example `cmjj00xxxx`
         */
        CommodityCode: string;
        /**
         * 云市场商品版本。
         * > 该参数仅部署物为镜像部署物时可设置。
         * @example `V1.0`
         */
        CommodityVersion: string;
        /**
         * OSS文件元数据。
         * > 该参数仅部署物为文件部署物时可设置。
         * @example `{\"WorkDir\":\"/root\",\"CommandType\":\"RunShellScript\",\"Platform\":\"Linux\",\"Script\":\"echo hello\"}`
         */
        FileScriptMetadata: string;
        /**
         * 脚本部署物脚本内容。
         * > 该参数仅部署物为脚本部署物时可设置。
         * @example `{"ScriptMetadata":"{\"CommandType\":\"RunShellScript\",\"Platform\":\"Linux\",\"Script\":\"ls\"}"}`
         */
        ScriptMetadata: string;
    };
    /**
     * 部署物支持的地域ID。
     */
    "SupportRegionIds"?: string[];
}
