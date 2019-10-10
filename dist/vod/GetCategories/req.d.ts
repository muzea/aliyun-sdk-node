interface GetCategoriesRequest {
    "RegionId"?: string;
    "OwnerId"?: string;
    /**
    * 分类ID，默认为根节点分类ID，即**-1**。
    * @example `49339`
    */ "CateId"?: number;
    /**
    * 子分类列表页号，默认值为**1**。
    * @example `1`
    */ "PageNo"?: number;
    /**
    * 子分类列表页大小，默认值为**10**，最大值为**100**。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 排序字段和排序顺序，多个用逗号分隔。按创建时间排序。取值范围：
    * - **CreationTime:Desc**
    * - **CreationTime:Asc**
    * > 排序字段示例：[排序字段](https://help.aliyun.com/document_detail/99179.html?spm=a2c4g.11186623.2.20.7e036ad8dnvm2w#%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B)。
    * 获取搜索条件是前5000条的数据时，最多支持三个排序字段。
    * 获取搜索条件是所有数据时，仅支持一个排序字段。
    * @example `CreationTime:Desc`
    */ "SortBy"?: string;
    /**
    * 素材片段类型。取值：
    * - **Video（默认值）**：视频
    * - **Image**：图片
    * @example `Video`
    */ "Type"?: string;
}
export { GetCategoriesRequest };