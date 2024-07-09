export interface GetMetaQueryStatusResponse {
    /**
     * 保存元数据索引信息的容器。
     */
    MetaQueryStatus: {
        /**
         * 元数据索引库的状态。取值范围如下：
         * Ready：创建后准备中
         * 元数据索引库正在准备中，您无法通过元数据索引库查询到数据。
         * Stop：已暂停
         * Running：运行中
         * Retrying：创建失败后重试中
         * Failed：创建失败
         * Deleted：已删除
         * @example `Runing`
         */
        State: string;
        /**
         * 当前扫描类型。取值范围如下：
         * FullScanning：全量扫描中
         * IncrementalScanning：增量扫描中
         * @example `FullScanning`
         */
        Phase: string;
        /**
         * 元数据索引库的创建时间，遵循RFC 3339标准格式，格式为YYYY-MM-DDTHH:mm:ss+TIMEZONE。其中YYYY-MM-DD表示年月日，T表示time元素的开头，HH:mm:ss表示时分秒，TIMEZONE表示时区。
         * @example `2021-08-02T10:49:17.289372919+08:00`
         */
        CreateTime: string;
        /**
         * 元数据索引库的创建时间，遵循RFC 3339标准格式，格式为YYYY-MM-DDTHH:mm:ss+TIMEZONE。其中YYYY-MM-DD表示年月日，T表示time元素的开头，HH:mm:ss表示时分秒，TIMEZONE表示时区。
         * @example `2021-08-02T10:49:17.289372919+08:00`
         */
        UpdateTime: string;
    };
}
