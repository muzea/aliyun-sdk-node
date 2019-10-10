interface DeleteImageRequest {
    "RegionId"?: string;
    /**
    * 图片删除操作类型。取值：
    * - **ImageURL**：根据图片URL删除指定图片。
    * - **ImageId**：根据图片ID删除指定图片。
    * - **VideoId**：根据视频ID删除其关联图片。
    * @example `VideoId`
    */ "DeleteImageType": string;
    "OwnerId"?: number;
    /**
    * 图片URL。
    * - DeleteImageType=ImageURL时必传。
    * - URL编码，多个以英文逗号分隔。
    * - 避免存在特殊字符导致图片无法删除成功，需要URL编码后再做逗号拼接。
    * @example `http://xxxx,http://xxxxx`
    */ "ImageURLs"?: string;
    /**
    * 图片ID。
    * - 支持批量，多个英文逗号分隔。
    * - DeleteImageType=ImageId时必传。
    * @example `ImageId1,ImageId2`
    */ "ImageIds"?: string;
    /**
    * 视频ID。DeleteImageType=VideoId时必传。
    * @example `fdbsngsn4363mnf`
    */ "VideoId"?: string;
    /**
    * 图片类型。DeleteImageType=VideoId时必传。
    * 取值：
    * - **CoverSnapshot**：封面截图。
    * - **NormalSnapshot**：SubmitSnapshotJob接口发起的普通截图 。
    * - **SpriteSnapshot**：SubmitSnapshotJob接口发起的雪碧截图。
    * - **SpriteOriginSnapshot**：组成雪碧图的原始小图。
    * - **All（以上多种类型的图片）**：非All时支持多个类型英文逗号分隔传入。
    * @example `All`
    */ "ImageType"?: string;
}
export { DeleteImageRequest };