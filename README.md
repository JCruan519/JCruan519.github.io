# Jiacheng Ruan’s academic homepage

A lightweight academic profile at <https://jcruan519.github.io/>, redesigned in October 2026. The page uses static HTML, local CSS, and a small progressive-enhancement script. It requires no npm packages, remote fonts, analytics, or browser-side content fetching.

## Preview

Run `sh run_server.sh` from this directory, then open <http://127.0.0.1:8000/>. An optional first argument sets the port. The page also works directly from `index.html`.

GitHub Pages continues to use the existing managed build from `main`. `_config.yml` excludes the previous template so it cannot generate a second homepage. The new files need no Jekyll theme or plugins. No hosting settings have changed.

## Maintain

- `index.html`: biography, research, news, publication records, experience, honors, service, metadata.
- `assets/css/home.css`: responsive layout, colors, typography, print styling.
- `assets/js/home.js`: publication filters, mobile menu, active section navigation. All content remains available without JavaScript.
- `images/publications/`: locally rendered and compressed authored paper figures.
- `about/index.html` and `about.html`: preserve previous homepage links.
- `sitemap.xml`: update `lastmod` when updating the page, along with the visible footer date.

Each publication is an HTML `article.paper`. Use `data-topics` with space-separated values from `learning`, `multimodal`, `evaluation`, and `medical` to set its filters. Put additional work in the expandable publication list. Cite the public title and author order, label preprints explicitly, and add only working public links. Asterisks mark equal contribution.

The original template files remain in the repository for reference and are excluded from deployment; edits to them no longer affect the new homepage.

## October 2026 content update

The revised profile emphasizes efficient post-training, multimodal reasoning, and evaluation. New results include the COPD preprint and MMGist (EMNLP 2026 Findings, accepted), ExFusion (IEEE TMM 2026), MME-SCI (AAAI 2026), VLRMBench (ICCV 2025), MPI-CD (ACM MM 2025), and TTE (AAAI 2025). Additional 2026 collaborations MEMO and Edit2TikZ are in the expandable list, with core figures extracted from their public papers. The current research internship is Qwen Team, Alibaba Group (April 2026–present), focusing on multimodal large language model post-training. MMGist acceptance and the Qwen internship were confirmed directly by the user on October 1, 2026.

VM-UNet is updated to ACM TOMM 2025 with its published three-author list. GIST uses the published eight-author list. Metadata was checked against public arXiv, Crossref DOI, GitHub, and CVF records on October 1, 2026. The biography and academic service sections reflect the author’s latest confirmed professional information. Only confirmed awards are listed.

## Attribution

The previous AcadHomepage template and its license remain in this repository. The new homepage layout is implemented directly for this profile.

The profile uses “Ph.D. candidate” and “Wu Wenjun AI Honors Ph.D. Class”, with no advisor line, as requested by the author. Public GitHub and Hugging Face resources were checked against official repository READMEs and model/dataset cards. HF resources cover MME-SCI, VLRMBench, MM-CamObj, and LLaMA-MoE; VM-UNet weights and the MALUNet adaptation are explicitly labeled as a community mirror/model. MMGist was accepted in August 2026. Its official Hugging Face dataset link is included at the author’s explicit request; current unauthenticated access may require permissions.
