interface ListSnapshotsRequest {
    "RegionId"?: string;
    /**
    * 视频ID。
    * @example `d3e680e618708fef7cefbf2cae7cc931`
    */ "VideoId": string;
    "OwnerId"?: number;
    /**
    * 返回的截图类型。取值范围：
    * - **CoverSnapshot（默认值）**：封面截图
    * - **NormalSnapshot**：SubmitSnapshotJob接口发起的普通截图
    * - **SpriteSnapshot**：SubmitSnapshotJob接口发起的雪碧截图
    * - **SpriteOriginSnapshot**：组成雪碧图的原始小图
    * @example `CoverSnapshot`
    */ "SnapshotType"?: string;
    /**
    * 截图地址过期时间。默认值：**3600秒**，最小值：**3600秒 **(当指定时间小于3600秒时，默认为3600秒）。
    * > 如果返回的是OSS地址，为降低源站安全风险，最大值为2592000(即30天)。该参数只有开启了[URL鉴权](https://help.aliyun.com/document_detail/57007.html?spm=a2c4g.11186623.2.15.52a33d21ZDBetT)才会生效。
    * @example `3600`
    */ "AuthTimeout"?: string;
    /**
    * 翻页大小。默认值：**20**，最大值：**100**。
    * @example `20`
    */ "PageSize"?: string;
    /**
    * 翻页页号。默认值：**1**。
    * @example `1`
    */ "PageNo"?: string;
}
export { ListSnapshotsRequest };