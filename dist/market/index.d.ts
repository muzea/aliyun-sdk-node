interface MARKET {
    NotifyContractEvent(query: {
        "RegionId"?: string;
        "EventType": string;
        "EventMessage": string;
    }): Promise<{}>;
    ActivateLicense(query: {
        "RegionId"?: string;
        "LicenseCode": string;
        "Identification"?: string;
    }): Promise<{}>;
    BindImagePackage(query: {
        "RegionId"?: string;
        "EcsInstanceId": string;
        "ImagePackageInstanceId": string;
    }): Promise<{}>;
    CreateCommodity(query: {
        "RegionId"?: string;
        "ApplicationId": string;
        "Content": string;
    }): Promise<{}>;
    DescribeCommodities(query: {
        "RegionId"?: string;
        "CommodityId"?: string;
        "Properties"?: string;
        "CommodityAuditStatuses"?: string;
        "CommodityCategoryIds"?: string;
        "CommodityGmtCreatedFrom"?: string;
        "CommodityGmtCreatedTo"?: string;
        "CommodityGmtModifiedFrom"?: string;
        "CommodityGmtModifiedTo"?: string;
        "CommodityGmtPublishFrom"?: string;
        "CommodityGmtPublishTo"?: string;
        "PageNumber"?: number;
        "PageSize"?: number;
        "CommodityStatuses"?: string;
        "CommodityIds"?: string;
    }): Promise<{}>;
    DescribeOrder(query: {
        "RegionId"?: string;
        "OrderId": string;
    }): Promise<{
        "Quantity": number;
        "OrderStatus": string;
        "ProductCode": string;
        "TotalPrice": number;
        "OrderId": string;
        "ProductSkuCode": string;
        "OriginalPrice": number;
        "PeriodType": string;
        "PaymentPrice": number;
        "CouponPrice": number;
        "SupplierCompanyName": string;
        "PayStatus": string;
        "InstanceIds": {
            "InstanceId": string[];
        };
        "PaidOn": number;
        "AliUid": number;
        "OrderType": string;
        "CreatedOn": number;
        "SupplierTelephones": {
            "Telephone": string[];
        };
        "ProductName": string;
        "AccountQuantity": number;
    }>;
    DescribePrice(query: {
        "RegionId"?: string;
        "OrderType": string;
        "Commodity": string;
    }): Promise<{
        "DiscountPrice": number;
        "ProductCode": string;
        "OriginalPrice": number;
        "TradePrice": number;
        "PromotionRules": {
            "PromotionRule": any[];
        };
    }>;
    DescribeProduct(query: {
        "RegionId"?: string;
        "Code": string;
        "AliUid"?: string;
        "QueryDraft"?: boolean;
    }): Promise<{
        "Description": string;
        "Type": string;
        "PicUrl": string;
        "Code": string;
        "ProductExtras": {
            "ProductExtra": {
                "Values": string;
                "Key": string;
                "Type": string;
                "Order": number;
                "Label": string;
            }[];
        };
        "Name": string;
        "ShortDescription": string;
        "ShopInfo": {
            "Telephones": {
                "Telephone": string[];
            };
            "Name": string;
            "Emails": string;
            "WangWangs": {
                "WangWang": {
                    "UserName": string;
                    "Remark": string;
                }[];
            };
            "Id": number;
        };
        "ProductSkus": {
            "ProductSku": {
                "ChargeType": string;
                "Name": string;
                "OrderPeriods": {
                    "OrderPeriod": {
                        "Name": string;
                        "PeriodType": string;
                    }[];
                };
                "Modules": {
                    "Module": {
                        "Name": string;
                        "Id": string;
                        "Code": string;
                        "Properties": {
                            "Property": {
                                "Name": string;
                                "Key": string;
                                "DisplayUnit": string;
                                "PropertyValues": {
                                    "PropertyValue": {
                                        "Step": string;
                                        "Type": string;
                                        "Max": string;
                                        "Min": string;
                                    }[];
                                };
                                "ShowType": string;
                            }[];
                        };
                    }[];
                };
                "Constraints": string;
                "Hidden": boolean;
                "Code": string;
            }[];
        };
        "Score": number;
    }>;
    DescribeProducts(query: {
        "RegionId"?: string;
        "SearchTerm"?: string;
        "Filter"?: string[];
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{
        "pageNumber": number;
        "pageSize": number;
        "productItems": {
            "categoryId": number;
            "code": string;
            "code1": string;
            "deliveryWay": string;
            "imageUrl": string;
            "operationSystem": string;
            "score": string;
            "shortDescription": string;
            "suggestedPrice": string;
            "supplierId": number;
            "supplierName": string;
            "tags": string;
        }[];
        "requestId": string;
        "totalCount": number;
    }>;
    DescribeRate(query: {
        "RegionId"?: string;
        "OrderId": string;
    }): Promise<{}>;
    PushMeteringData(query: {
        "RegionId"?: string;
        "Metering"?: string;
    }): Promise<{}>;
    QueryMarketCategories(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    CreateOrder(query: {
        "RegionId"?: string;
        "OrderType": string;
        "Commodity": string;
        "PaymentType": string;
        "ClientToken": string;
        "OwnerId"?: string;
        "OrderSouce"?: string;
    }): Promise<{
        "InstanceIds": {
            "InstanceId": string[];
        };
        "OrderId": string;
    }>;
    CreateRate(query: {
        "RegionId"?: string;
        "OrderId": string;
        "Content": string;
        "Score": string;
    }): Promise<{}>;
    DeleteCommodity(query: {
        "RegionId"?: string;
        "CommodityId": string;
    }): Promise<{}>;
    DescribeCommodity(query: {
        "RegionId"?: string;
        "CommodityId": string;
    }): Promise<{}>;
    DescribeInstance(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "OrderType"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "BeganOn": number;
        "ProductCode": string;
        "InstanceId": string;
        "OrderId": string;
        "ProductSkuCode": string;
        "EndOn": number;
        "Status": string;
        "ProductType": string;
        "CreatedOn": number;
        "ProductName": string;
        "SupplierName": string;
    }>;
    DescribeInstances(query: {
        "RegionId"?: string;
        "PageNumber": number;
        "PageSize": number;
        "ProductType"?: string;
    }): Promise<{}>;
    DescribeLicense(query: {
        "RegionId"?: string;
        "LicenseCode": string;
    }): Promise<{}>;
    QueryMarketImages(query: {
        "RegionId"?: string;
        "Param"?: string;
    }): Promise<{}>;
    UpdateCommodity(query: {
        "RegionId"?: string;
        "CommodityId": string;
        "Content": string;
    }): Promise<{}>;
    UploadCommodityFile(query: {
        "RegionId"?: string;
        "FileContentType": string;
        "FileResource": string;
        "FileResourceType": string;
    }): Promise<{}>;
}
export default MARKET;
