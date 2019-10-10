interface UpdateCategoryRequest {
    "RegionId"?: string;
    /**
    * 分类ID。
    * @example `706363`
    */ "CateId": number;
    /**
    * 分类名称，不能超过64个字节，UTF8编码。
    * @example `阿里云分类名称`
    */ "CateName": string;
    "OwnerId"?: string;
}
export { UpdateCategoryRequest };