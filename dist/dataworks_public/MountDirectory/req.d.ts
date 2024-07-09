export interface MountDirectoryRequest {
    /**
     * 添加到数据分析左侧导航的类型，例如：META_ALBUM，元数据-数据专辑。
     * @example `META_ALBUM`
     */
    "TargetType"?: string;
    /**
     * 与TargetType配合使用，为添加到数据分析左侧导航的元素的唯一ID。
     * 例如，TargetType=META_ALBUM，即类型为元数据-数据专辑，则TargetId为元数据-数据专辑的唯一ID，参见：[ListMetaCollections](~~469938~~)#QualifiedName。
     * @example `album.339`
     */
    "TargetId"?: string;
    /**
     *  租户内指定用户的UserId。
     * - 如果此字段为空，则代表修改自己的目录。
     * - 如果此字段不为空，则修改此UserId的目录。
     * @example `1234567890`
     */
    "TargetUserId"?: string;
}
