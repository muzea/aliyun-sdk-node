// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ScoreParamInGetScoreInfo
export interface ScoreParamInGetScoreInfo {
	ScoreNum: number;
	ScoreSubId: number;
	ScoreSubName: string;
	ScoreType: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ScoreInfosInGetScoreInfo
export interface ScoreInfosInGetScoreInfo {
	ScoreParam: ScoreParamInGetScoreInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ScorePoInGetScoreInfo
export interface ScorePoInGetScoreInfo {
	ScoreId: number;
	ScoreName: string;
	ScoreInfos: ScoreInfosInGetScoreInfo;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInGetScoreInfo
export interface DataInGetScoreInfo {
	ScorePo: ScorePoInGetScoreInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.GetScoreInfoResponse
export interface GetScoreInfoResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Data: DataInGetScoreInfo;
}

