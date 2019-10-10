interface AddCategoryRequest {
    "RegionId"?: string;
    /**
    * 分类名称，不能超过64个字节，UTF8编码
    * @example `35018bc7-efab-420a-abda-777795695b2a`
    */ "CateName": string;
    "OwnerId"?: string;
    /**
    * 父分类ID，若不填，则默认生成一级分类，根节点分类ID为-1
    * @example `620963913456741794`
    */ "ParentId"?: number;
    "Type"?: string;
}
export { AddCategoryRequest };