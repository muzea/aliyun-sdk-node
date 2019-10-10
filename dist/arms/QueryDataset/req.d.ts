interface QueryDatasetRequest {
    "RegionId"?: string;
    "IntervalInSec": number;
    "MinTime": number;
    "MaxTime": number;
    "DateStr"?: string;
    "IsDrillDown"?: boolean;
    "OrderByKey"?: string;
    "Limit"?: number;
    "ReduceTail"?: boolean;
    "HungryMode"?: boolean;
    "Measures"?: string[];
    "Dimensions"?: string[];
    "RequiredDims"?: string[];
    "OptionalDims"?: string[];
    "DatasetId": number;
}
export { QueryDatasetRequest };