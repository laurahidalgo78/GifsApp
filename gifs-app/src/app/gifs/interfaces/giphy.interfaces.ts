import { Meta } from "@angular/platform-browser";

export interface GiphyResponse {
    data: GiphyItem[];
    meta: Meta;
}

export interface GiphyItem {
    type:                       string;
    id:                         string;
    url:                        string;
    slug:                       string;
    bitly_gif_url:              string;
    bitly_url:                  string;
    embed_url:                  string;
    username:                   string;
    source:                     string;
    title:                      string;
    rating:                     string;
    content_url:                string;
    source_tld:                 string;
    source_post_url:            string;
    source_caption:             string;
    is_sticker:                 number;
    import_datetime:            Date;
    trending_datetime:          Date;
    images:                     Analytics;
    user:                       Analytics;
    analytics_response_payload: string;
    analytics:                  Analytics;
    alt_text:                   string;
    is_low_contrast:            boolean;
}

export interface Analytics {
}
