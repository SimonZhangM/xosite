import Link from "next/link";

import { Container, SectionHeading, SiteShell, StatusPill } from "../components/site-chrome";
import { downloadLinks, siteConfig } from "../site-data";

export const metadata = {
  title: "下载 | XplorOne",
  description: "查看 XplorOne Windows 版的发布进度、当前支持范围和后续下载开放节奏。",
};

export default function DownloadPage() {
  return (
    <SiteShell>
      <section className="pb-20 pt-14 sm:pb-24 sm:pt-18">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_24rem]">
          <div className="rounded-[2rem] border border-[var(--line)] bg-white p-7 shadow-[var(--shadow-soft)] sm:p-9">
            <div className="flex flex-wrap items-center gap-3">
              <StatusPill status="即将开放" />
              <span className="rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-3 py-1.5 text-sm text-[var(--text-muted)]">
                Windows 版整理中
              </span>
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[var(--text-strong)]">
              下载入口暂未开放，但你不会在这里撞墙
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--text-muted)]">
              首版官网已经上线，Windows 版正在整理发布流程。当前阶段先同步产品状态、支持范围和后续节奏，安装包稍后开放。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={downloadLinks.progress}
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent-warm)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-warm-strong)]"
              >
                查看发布进度
              </Link>
              <Link
                href={downloadLinks.github}
                className="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] bg-white px-5 py-3 text-sm font-semibold text-[var(--text-strong)] transition hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue-strong)]"
              >
                访问 GitHub
              </Link>
              <Link
                href={downloadLinks.changelog}
                className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-5 py-3 text-sm font-semibold text-[var(--text-strong)] transition hover:bg-white"
              >
                查看更新日志
              </Link>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-[rgba(46,107,255,0.16)] bg-[linear-gradient(180deg,rgba(46,107,255,0.08),rgba(255,255,255,0.96))] p-7 shadow-[var(--shadow-soft)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue-strong)]">
              当前支持范围
            </p>
            <div className="mt-6 space-y-4">
              {[
                ["官网内容浏览", "已支持"],
                ["功能结构预览", "已支持"],
                ["Windows 安装包", "即将开放"],
                ["MCP 详细文档", "规划中"],
              ].map(([label, status]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 rounded-[1.2rem] border border-white/80 bg-white/88 px-4 py-3"
                >
                  <span className="text-sm font-medium text-[var(--text-strong)]">{label}</span>
                  <StatusPill status={status as typeof siteConfig.status} compact />
                </div>
              ))}
            </div>
          </aside>
        </Container>
      </section>

      <section id="release-status" className="pb-20 sm:pb-24">
        <Container>
          <SectionHeading
            eyebrow="发布进度"
            title="当前处于“官网先行、安装包后补”的阶段"
            description="这是一个刻意的发布节奏。先把产品定位、截图、FAQ 和更新口径做好，再开放真正的下载入口。"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "官网首版",
                detail: "首页、下载页、FAQ 和更新日志已经可预览，可直接接入 GitHub + Vercel 工作流。",
                status: "已支持",
              },
              {
                title: "Windows 安装包",
                detail: "正在整理发布流程、状态口径与下载承接路径，避免放出一个不可维护的假按钮。",
                status: "即将开放",
              },
              {
                title: "后续二级页",
                detail: "本地优先细节、MCP 说明与更多场景页会在首版稳定后继续扩展。",
                status: "规划中",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[1.7rem] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-soft)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-lg font-semibold text-[var(--text-strong)]">{item.title}</h2>
                  <StatusPill status={item.status as typeof siteConfig.status} compact />
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">{item.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="github-status" className="pb-20 sm:pb-24">
        <Container>
          <div className="rounded-[2rem] border border-[var(--line)] bg-white p-7 shadow-[var(--shadow-soft)] sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue-strong)]">
              GitHub 状态
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text-strong)]">
              仓库入口会在公开时补充，当前先保留真实状态说明
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--text-muted)]">
              当前官网工程已经按 GitHub + Vercel 自动部署工作流搭建完成，但公开仓库地址尚未在本页固化。为了不制造一个假的外链，这里先明确说明状态：仓库地址将在首版公开时同步补充。
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">
              等仓库地址确认后，只需要把一个配置值替换为真实 URL，下载页和 Footer 会自动同步更新。
            </p>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
