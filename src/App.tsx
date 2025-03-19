import { useEffect, useState } from "react";
import instructions from "./Instructions";
import "./index.css";

const AppDownloadPage = () => {
	const [os, setOs] = useState<"Windows" | "Mac" | "Linux">("Windows");
	const [arch, setArch] = useState("x64");

	useEffect(() => {
		const platform = navigator.platform.toLowerCase();
		const userAgent = navigator.userAgent.toLowerCase();

		if (platform.includes("win")) setOs("Windows");
		else if (platform.includes("mac")) setOs("Mac");
		else if (platform.includes("linux")) setOs("Linux");

		if (userAgent.includes("aarch64") || userAgent.includes("arm64")) setArch("ARM64");
		else setArch("x64");
	}, []);

	const downloadLink = `https://github.com/Bing-Chill-inc/Algoforge-main/releases/latest/download/Algoforge-${os}-${arch}.zip`;

	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				fontFamily: "Avenir Next, sans-serif",
				backgroundColor: "#F2F5F8",
				color: "#0C3245",
			}}
		>
			<div
				style={{
					minHeight: "50%",
					width: "50%",
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
					gap: "2rem",
					backgroundColor: "#E5EAF0",
					borderRadius: "1rem",
					position: "relative",
					paddingBottom: "2rem",
				}}
			>
				<h1>Télécharger Algoforge</h1>

				<div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "4rem" }}>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<label>Système d'exploitation</label>
						<select
							style={{
								width: "100%",
								padding: "0.5rem",
								borderRadius: "0.5rem",
								border: "3px solid #0C3245",
								background: "transparent",
							}}
							value={os}
							onChange={(e) => setOs(e.target.value as "Windows" | "Mac" | "Linux")}
						>
							<option value="Windows">Windows</option>
							<option value="Mac">MacOS</option>
							<option value="Linux">Linux</option>
						</select>
					</div>

					<div style={{ display: "flex", flexDirection: "column" }}>
						<label>Architecture</label>
						<select
							style={{
								width: "100%",
								padding: "0.5rem",
								borderRadius: "0.5rem",
								border: "3px solid #0C3245",
								background: "transparent",
							}}
							value={arch}
							onChange={(e) => setArch(e.target.value)}
						>
							<option value="x64">{os == "Mac" ? "Intel" : "x64"}</option>
							<option value="ARM64">{os == "Mac" ? "Apple Silicon" : "ARM64"}</option>
						</select>
					</div>
				</div>

				{instructions[os]}

				<div
					style={{
						padding: "1rem 10rem",
						borderRadius: "0.5rem",
						backgroundColor: "#0C3245",
						color: "white",
						cursor: "pointer",
						position: "absolute",
						bottom: "2rem",
					}}
					onClick={() => window.open(downloadLink, "_blank")}
				>
					Télécharger
				</div>

				{/* <a href={downloadLink}>
					Download for {os} {arch}
				</a> */}
			</div>
		</div>
	);
};

export default AppDownloadPage;
